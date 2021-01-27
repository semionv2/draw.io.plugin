Draw.loadPlugin(function(ui) {
    var graph = ui.editor.graph;
    var highlight = new mxCellHighlight(graph, '#00ff00', 8);

    function cellClicked(cell)  
	{
		// Forces focusout in IE
		graph.container.focus();

		// Gets the selection cell
		if (cell == null)
		{
			highlight.highlight(null);
		}
		else
		{
			highlight.highlight(graph.view.getState(cell));
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