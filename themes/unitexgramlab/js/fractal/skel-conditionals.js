/* skel-conditionals.js fully based on skel-layout.js v3.0.1 | (c) skel.io | MIT licensed */

(function(_) { "use strict"; var __ = {

  /******************************/
  /* Properties                 */
  /******************************/

    /**
     * Default config.
     * @type {object}
     */
    config: {

      // Breakpoints.
        breakpoints: {},

      // Conditionals.
        enabled: false
    },

    /**
     * State config cache.
     * @type object
     */
    stateConfigs: {},

  /******************************/
  /* Methods                    */
  /******************************/

    /**
     * Initializes conditionals module.
     * @param {object} config Config.
     */
    init: function(config) {

      // Extend with user config.
        _.extend(__.config, config);

      // Add state handler.
        _.addStateHandler('conditionals', __.stateHandler);

      // Reorder (and, if necessary, fill out) breakpoints.
        var c = {};

        _.iterate(_.obj.breakpoints, function(id) {

          c[id] = {};

          if (id in __.config.breakpoints)
            _.extend(c[id], __.config.breakpoints[id]);

        });

        __.config.breakpoints = c;

      return _;

    },

    /**
     * State handler.
     * @return {array} Attachments.
     */
    stateHandler: function() {

      var config,
        attachments = [],
        x, id, s, s1, s2;

      // Generate state config.
        config = _.generateStateConfig(
          {
            containers: __.config.containers,
            grid: __.config.grid
          },
          __.config.breakpoints
        );

      // STYLE: Conditionals.
        if (__.config.enabled) {

          id = 'sCd-' + _.stateId;

          if (!(x = _.attachment(id))) {

            s1 = [];
            s2 = [];

            _.iterate(_.obj.breakpoints, function(k) {

              if (_.indexOf(_.breakpointIds, k) !== -1)
                s1.push('.not-' + k);
              else
                s2.push('.only-' + k);

            });

            s = (s1.length > 0 ? s1.join(',') + '{display:none!important}' : '') + (s2.length > 0 ? s2.join(',') + '{display:none!important}' : '');

            x = _.newAttachment(
              id,
              _.newStyle(s.replace(/\.([0-9])/, '.\\3$1 ')),
              5
            );

          }

          attachments.push(x);

        }

      // Cache state config.
        __.stateConfigs[_.stateId] = config;

      return attachments;

    }

}; _.conditionals = __.init; })(skel);
