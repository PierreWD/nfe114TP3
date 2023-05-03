<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
    'host' => 'dpg-ch0irarh4hsukp31lg4g-a.frankfurt-postgres.render.com',
    'driver' => 'pdo_pgsql',
    'user' => 'nfe114_user',
    'password' => 'NKWaKZWpkZVqOH56xvbWNHCQya5ezyeJ',
    'dbname' => 'nfe114',
    'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
