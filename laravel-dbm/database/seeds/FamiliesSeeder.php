<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FamiliesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('families')->insert([
            'name' => 'Rosa Barreiros',
            'username' => 'rosabarreiros',
            'password' => '$2b$10$aTcKyk.dm9VlmLArgfAzRexBFhqkrsnlp3Wg.DQbUoEANVywbZtgW', //secret-password
        ]);
    }
}
