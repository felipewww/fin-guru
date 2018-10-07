<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name'); //Felipe
            $table->string('lastname'); //Barreiros
            $table->string('nickname'); //Pai
            $table->string('password'); //secret-password
            $table->integer('family_id')->unsigned();
            $table->timestamps();

            $table->foreign('family_id')
                ->references('id')
                ->on('families')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
