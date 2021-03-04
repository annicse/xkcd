<?php
require_once 'library/xkcd.php';
$xkcd = new Xkcd();

if ( isset($_POST['getComic']) ) {
	if ( isset($_POST['comicID']) )
		$comic = $xkcd->get_comic($_POST['comicID']);
	else if ( isset($_POST['searchQuery']) )
		$comic = $xkcd->search_comic($_POST['searchQuery']);
	else
		$comic = $xkcd->get_comic();

	echo $comic;
}

if ( isset($_POST['getNav']) ) {
	$comic = $xkcd->create_nav($_POST['searchQuery']);
	echo $comic;
}