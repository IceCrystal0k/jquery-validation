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
			var formId = 'mainForm';
			tinyMCE.triggerSave();
			var submitForm = ($("#"+formId).valid());
			if (submitForm)
				$('#'+formId).submit();
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

$(document).ready(function() {
	var fnPageEdit = new PageEdit();
	fnPageEdit.Init();
});
