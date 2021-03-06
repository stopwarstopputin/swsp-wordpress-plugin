<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5b0fd8da5943a59d52b0c614e4811bf6
{
    public static $prefixLengthsPsr4 = array (
        'I' => 
        array (
            'IP2Proxy\\' => 9,
            'IP2Location\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'IP2Proxy\\' => 
        array (
            0 => __DIR__ . '/..' . '/ip2location/ip2proxy-php/src',
        ),
        'IP2Location\\' => 
        array (
            0 => __DIR__ . '/..' . '/ip2location/ip2location-php/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5b0fd8da5943a59d52b0c614e4811bf6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5b0fd8da5943a59d52b0c614e4811bf6::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5b0fd8da5943a59d52b0c614e4811bf6::$classMap;

        }, null, ClassLoader::class);
    }
}
