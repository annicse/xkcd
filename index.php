<!DOCTYPE html>
<html>
<head>
	<title>XKCD comic loader</title>
	<script type="text/javascript" src="assets/build/js/main.js"></script>
	<link rel="stylesheet" href="assets/build/css/main.css">
</head>
<body>
	<header>
		<h1>My XKCD comics</h1>
	</header>

	<main>
		<section id="comic-container">

			<form action="" method="post" id="search">
				<input type="text" name="comic_name" id="comic_name">
				<button id="do-search">Search comic</button>
				<span id="status-msg"></span>
			</form>

			<div id="comic-data">
				<section class="the-comic">

					<header><h2></h2></header>
					<img src="" alt="">

					<article id="transcript">
						<header><h3>The transcript</h3></header>
						<p></p>
					</article>

				</section>
			</div>

			<div id="comic-nav">
				<nav>
					<ul>
						<li><a data-nextPageID="0" href="#" class="prev">Prev</a></li>
						<li><a data-nextPageID="1" href="#" class="next">Next</a></li>
					</ul>
				</nav>

			</div>

		</section>
	</main>
</body>
</html>