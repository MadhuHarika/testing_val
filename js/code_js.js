function valfname()
{

   var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementsByName('FirstName').value;
    if(!regName.test(name)){
        alert('Enter alphabets only!!!');
    }else{
        alert('Valid name given.');
    }

}

function vallname()
{
    var regName=/^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementsByName('LastName').value;
    if(!regName.test(name)){
        alert('Enter alphabets only!!!');
    }else{
        alert('Valid name given.');
    }

}
function valUname()
{
    var regName=/^[A-Za-z0-9_@\.]|@{2,}|\.{5,};
    var name=document.getElementsByName('UserName').value;
    var len=name.length;
    let at = document.getElementsByName('UserName').value.indexOf("[0-9]")
    if(len(name)<8 || len(name)>12)
    {
        alert('Length of username should be between 8 & 12 ');
    }
    else if (at == -1)
    {
        alert('User name must not start with number');
    }
    else
    {
        alert('user name can not be blank');
    }
}

