Draw.loadPlugin(function(ui) {
    var graph = ui.editor.graph;
    
    function cellClicked(cell)
	{
		// Forces focusout in IE
		graph.container.focus();

        debugger;

		// Gets the selection cell
		if (cell == null)
		{
			
		}
		else
		{
			
		}
	};

    graph.click = function(me)
	{
		// Async required to enable hyperlinks in labels
		window.setTimeout(function()
		{
			cellClicked(me.getCell());
		}, 0);
	};
});