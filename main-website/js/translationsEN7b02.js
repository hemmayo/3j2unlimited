var trans = "";

$.ajax({
	url: "/js/translations/translation.en.json",
	datatype: 'json',
	async: false,
	success: function (data)
	{
		trans = data;
	}
});
