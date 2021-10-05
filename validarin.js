function Ingresar()
{
var Usuario= "Darlyn"
var Contraseña="examen"

if (document.formingreso.Usuario.value==Usuario &&
 document.formingreso.Contraseña.value==Contraseña)

{
document.location="inicio.HTML"

}
else
{
alert("INGRESE USUARIO Y CONTRASEÑA CORRECTAMENTE ")

}

}