function setSelect(id) {
    $("#select" + id + " dd").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#s" + id).remove();
        } else {
            var copyThisA = $(this).clone();
            if ($("#s" + id).length > 0) {
                $("#s" + id + " a").html($(this).text());
            } else {
                $(".select-result dl").append(copyThisA.attr("id", "s" + id));
            }
        }
    });

    $("#s" + id).live("click", function () {
        $(this).remove();
        $("#select" + id + " .select-all").addClass("selected").siblings().removeClass("selected");
    });
}

$(document).ready(function () {
    $(".select dd").live("click", function () {
        if ($(".select-result dd").length > 1) {
            $(".select-no").hide();
        } else {
            $(".select-no").show();
        }
    });
});

    /* 筛选器 */
    function setS() {
		var selects = $('#select').children();
        for (var i = 0; i < selects.length; i++) {
			var id = selects[i].id;
			if(id != null && id != '')
			{
				setSelect(id.replace('select',''));
			}
        }
    }
    setS();