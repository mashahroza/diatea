var i,queryStr=window.location.search,currentRequestModify="api.php",forms=document.forms,formLength=forms.length;if(formLength>0)for(i=0;i<formLength;i++){var form=forms[i];form.action=currentRequestModify+queryStr,form.method="post",(name=form.name)&&(name.required=!0),(phone=form.phone)&&(phone.required=!0),(country=form.country)&&(country.style.display="none")}