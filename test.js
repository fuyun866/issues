
function filterParent(permissions){
    return permissions && permissions.length
        ? permissions.map((permission) => {
              if (permission.children) {
                  return filterParent(permission.children);
              } else {
                console.log(permission,permission.id,"permission");
                  return permission.id;
              }
          })
        : [];
}


const arr = [{children:[{id:"3"}],id:"1"},{id:"2"}]

console.log(filterParent(arr));