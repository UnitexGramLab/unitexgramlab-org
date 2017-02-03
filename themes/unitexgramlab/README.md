# Unitex/GramLab Theme for the CMS Grav

> [Unitex/GramLab][unitex] is an open source, cross-platform, multilingual, lexicon- and grammar-based corpus processing suite

This is the [Grav](http://getgrav.org) theme for the website running at http://unitexgramlab.org.

![UnitexGramLab](assets/readme_1.jpg)

## Installation

Installing the Unitex/GramLab theme can be done in one of two ways. The GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file. 

## GPM Installation

The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line). From the root of your Grav install type:

    bin/gpm install unitexgramlab

This will install the UnitexGramLab Theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/unitexgramlab`

## Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `unitexgramlab`. You can find these files on [GitHub](https://github.com/UnitexGramLab/unitexgramlab-orguser/themes/unitexgramlab/).

You should now have all the theme files under

    /your/site/grav/user/themes/unitexgramlab

>> NOTE: This theme is a modular component for Grav which requires the plugins listed [
here](../../.dependencies) 

# Updating

As development for the UnitexGramLab theme continues, new versions may become available that add additional features and functionality, improve compatibility with newer Grav releases, and generally provide a better user experience. Updating the UnitexGramLab theme is easy and can be done through Grav's GPM system, as well as manually.

## GPM Update (Preferred)

The simplest way to update this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm). You can do this with this by navigating to the root directory of your Grav install using your system's Terminal (also called command line) and typing the following:

    bin/gpm update unitexgramlab

This command will check your Grav install to see if your UnitexGramLab theme is due for an update. If a newer release is found, you will be asked whether or not you wish to update. To continue, type `y` and hit enter. The theme will automatically update and clear Grav's cache.

## Manual Update

Manually updating UnitexGramLab is pretty simple. Here is what you will need to do to get this done:

* Delete the `your/site/user/themes/unitexgramlab` directory.
* Download the new version of the UnitexGramLab Theme on [GitHub](https://github.com/UnitexGramLab/unitexgramlab-org/user/themes/unitexgramlab).
* Unzip the zip file in `your/site/user/themes` and rename the resulting folder to `unitexgramlab`.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in terminal and typing `bin/grav clear-cache`.

> Note: Any changes you have made to any of the files listed under this directory will also be removed and replaced by the new set. Any files located elsewhere (for example a YAML settings file placed in `user/config/themes`) will remain intact.

# Setup

If you want to set UnitexGramLab as the default theme, you can do so by following these steps:

* Navigate to `/your/site/grav/user/config`.
* Open the **system.yaml** file.
* Change the `theme:` setting to `theme: unitexgramlab`.
* Save your changes.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.

Once this is done, you should be able to see the new theme on the frontend. Keep in mind any customizations made to the previous theme will not be reflected as all of the theme and templating information is now being pulled from the **unitexgramlab** folder.

## Credits

* Developed by [Cristian Martinez](http://martinec.org) and powered by [Grav](http://getgrav.org). A comprehensive list of credits can be found [here](https://github.com/UnitexGramLab/unitexgramalab-org/CREDITS.md).
