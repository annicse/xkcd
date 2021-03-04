<?php

class Xkcd {
	private $view_path = './views/';
	private $show_next_prev = false;

	private function fetch_data_from_url($url) {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, $url);
		$result = curl_exec($ch);
		curl_close($ch);
		return $result;
	}

	public function get_comic($cid = null) {
		$comic_url = 'https://xkcd.com/' . $cid . '/info.0.json';
		$comic = $this->fetch_data_from_url($comic_url);
		return $comic;
		//include_once $this->view_path . 'comic.php';
	}

	public function search_comic($search_query) {
		$comic_url = 'https://relevantxkcd.appspot.com/process?action=xkcd&query='. $search_query;
		$relevant_comic = $this->fetch_data_from_url($comic_url);
		$search_res = explode(' ', $relevant_comic);
		$comic_ids = array();
		foreach ($search_res as $item) {
			if ( is_numeric($item) && floor($item) == $item && $item > 0)
				array_push($comic_ids, intval($item) );
		}

		$result_comic = $this->get_comic($comic_ids[0]);
		$result_comic_array = json_decode($result_comic, true);
		$result_comic_array['other_result_ids'] = implode(',', $comic_ids);
		return json_encode($result_comic_array);
	}
}
?>