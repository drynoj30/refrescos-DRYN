function ingresar()
{
var Usuario="Darlyn"
var Contraseña="examen";

if(document.formingreso.txtusuario.value==Usuario && 
        document.formingreso.txtcontraseña.value==Contraseña)

{
document.location="inicio.HTML"

}

else
{
alert("INGRESE USUARIO Y CONTRASEÑA CORRECTAMENTE")


}



}