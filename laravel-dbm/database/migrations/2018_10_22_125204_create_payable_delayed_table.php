<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePayableDelayedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payable_delayed', function (Blueprint $table) {
            $table->increments('id');
            $table->string('description');
            $table->integer('due_date');
            $table->integer('due_month');
            $table->decimal('amount');
            $table->decimal('amount_paid');

            $table->integer('category_id')->unsigned();

            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('restrict');

            $table->integer('user_id')->unsigned();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->string('status');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('payable_delayed');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
