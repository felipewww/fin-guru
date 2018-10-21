#!/bin/bash

#cd /var/www/laravel-dbm
#php artisan key:generate
composer update
#php artisan key:generate
php artisan migrate

#Keep container alive after end this script
/bin/bash