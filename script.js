if  ( 'serviceWorker'  en el  navegador )  {
    navegador . serviceWorker . registrar ( './sw.js' )
      . luego ( reg  =>  console . log ( 'Registro de SW exitoso' ,  reg ) )
      . catch ( err  =>  console . warn ( 'Error al tratar de registrar el sw' ,  err ) )
  }