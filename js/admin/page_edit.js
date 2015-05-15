function PageEdit()
{
	this.Init = function()
	{
		initControls();
		initValidator();
	}
	
	function initControls()
	{
		$('.btn-save').click(function(e) {
			tinyMCE.triggerSave();
			$('#mainForm').submit();
		});
	}
	
	function initValidator()
	{
		// addTinyMCEMethod();
		var rules = { txtName: 'required', txtContent: 'required'};
		var messages = { txtName: 'Complete Name', txtContent: 'Complete Content' };

		var vW = new ValidatorWrapper();
		vW.InitValidatorOptions('mainForm', {rules:rules, messages:messages, ignore:'' } );
	}
}
var fnPageEdit = new PageEdit();
fnPageEdit.Init();
