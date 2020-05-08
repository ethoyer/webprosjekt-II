#!/bin/bash

deploy(){
    cp $1 $2
    cd $2
    chmod 777 $1
    cd -
}

deploy intForm.php /Users/rinayamada/.bitnami/stackman/machines/xampp/volumes/root/htdocs/way_in_db