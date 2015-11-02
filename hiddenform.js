 
<script>
MktoForms2.whenReady(function (form) {
      var myForm = MktoForms2.allForms()[0];
var emailadd=document.getElementsByName("Email")[0].value;
alert(emailadd);
myForm.addHiddenFields({
	//These are the values which will be submitted to Marketo
	"Email":emailadd,
	
	});
myForm.submit();
});

      </script>
