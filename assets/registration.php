<?php
$bd = new mysqli('172.20.8.5','iz0901_08','pwd0901_8','iz0901_08');
$query = ("insert into `user`(`name`,`fam`,`phone`,`login`,`e-mail`,`password`)");
$login = ("select `login` from `user` where `login` like '$_POST{'login'}'");
?>
