<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class UnitexGramLab extends Theme
{
    public static function getSubscribedEvents() {
        return [
            'onTwigPageVariables' => ['onTwigPageVariables', 0],
        ];
    }
    
    public function onTwigPageVariables()
    {
      
    }
}
