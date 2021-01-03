while IFS= read -r line
do
  salida=$line;
  url="https://msapoyocovid-deudcvp-qa.cloudapps.imss.gob.mx/msapoyocovid/v1/getDatosCurp/$salida" 
  #echo $url;
  resultado=$(curl -s -w '%{http_code}\n' $url | cut -d'}' -f 2  ) ;
  #echo "$salida,""$resultado" ;
   if [ $resultado -ne 200 ]; then
      echo "$salida,$resultado"  >> out-$1.out ;
  fi
 
done < $1.in
