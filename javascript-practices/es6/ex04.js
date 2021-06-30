/**
 * 4. Default parameter
 */

const print = function(strs, e='---'){
    console.log(strs, e);
}

print([`Always`,`with`,`me`]);

const print1 = function(strs, e='\n'){
    console.log(strs.join(e));
}

print1([`Always`,`with`,`me`]);
print1([`Always`,`with`,`me`],' ');