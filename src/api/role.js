import request from '@/utils/request';

export function getRoleNameByRoleId(roleId) {
  return request({
    url: '/roles',
    method: 'get',
    params: {id: roleId},
  })
    .then(response => {
      return response.data.list[0].name;
    });
}


export function listRoles(pageInfo, role) {
  return request({
    url: '/roles',
    method: 'get',
    params: Object.assign(pageInfo, role),
  });
}

export function listRoleAllMenus(roleName) {
  return request({
    url: `/roles/${roleName}/menus`,
    method: 'get',
  });
}

export function listRoleAllResources(roleName) {
  return request({
    url: `/roles/${roleName}/resources`,
    method: 'get',
  });
}

export function allocResources(roleName, resourceIds) {
  return request({
    url: `/roles/${roleName}/resources`,
    method: 'post',
    data: resourceIds,
  });
}

export function addRoleMenu(roleName, menuId) {
  return request({
    url: `/roles/${roleName}/menus/${menuId}`,
    method: 'post',
  });
}

export function allocMenus(roleName, menuIds) {
  return request({
    url: `/roles/${roleName}/menus`,
    method: 'post',
    data: menuIds,
  });
}

export function updateRole(role) {
  return request({
    url: `/roles/${role.name}`,
    method: 'patch',
    data: role,
  });
}

export function addRole(role) {
  return request({
    url: `/roles`,
    method: 'post',
    data: role,
  });
}

export function deleteRole(roleName) {
  return request({
    url: `/roles/${roleName}`,
    method: 'delete',
  });
}

