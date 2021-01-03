let resultado=1;
while IFS= read -r line
do
  curp=$line;
 
 
    echo $resultado;
  
     if [ $resultado -lt 2001 ] && [ $resultado -gt 0 ]; then
      echo "$curp"  >> $11.in ;
    fi
     if [ $resultado -lt 4001 ] && [ $resultado -gt 2000 ]; then
      echo "$curp"  >> $12.in ;
    fi
     if [ $resultado -lt 6001 ] && [ $resultado -gt 4000 ]; then
      echo "$curp"  >> $13.in ;
    fi
     if [ $resultado -lt 8001 ] && [ $resultado -gt 6000 ]; then
      echo "$curp"  >> $14.in ;
    fi
     if [ $resultado -lt 10002 ] && [ $resultado -gt 8000 ]; then
      echo "$curp"  >> $15.in ;
    fi
    resultado=$((resultado+1));

 
done < $1.in
