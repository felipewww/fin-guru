<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FlagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $flags = [
            ['id' => 1, 'name' => 'Outro',       'logo' => null,],
            ['id' => 2, 'name' => 'Visa',        'logo' => 'visa.png',],
            ['id' => 3, 'name' => 'Master Card', 'logo' => 'master-card.png',],
            ['id' => 4, 'name' => 'Elo',         'logo' => 'elo.png',],
            ['id' => 5, 'name' => 'AMEX',        'logo' => 'amex.png',],
            ['id' => 6, 'name' => 'Hipercard',   'logo' => 'hipercard.png',],
            ['id' => 7, 'name' => 'Dinners',     'logo' => 'dinners.png',],
            ['id' => 8, 'name' => 'Alelo',       'logo' => 'alelo.png',],
        ];

        DB::table('card_flags')->insert($flags);
    }
}
