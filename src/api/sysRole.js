import request from '@/utils/request'

// 角色接口
const API = '/admin/system/sysRole';

// 分页查询
export const FindRoleListByPage = (pageNum, pageSize, queryDto) => {
  return request({
    url: `${API}/findByPage/${pageNum}/${pageSize}`,
    method: 'post',
    data: queryDto,
  })
}

// 添加
export const AddRole = (sysRole) => {
  return request({
    url: `${API}/add`,
    method: 'post',
    data: sysRole,
  })
}

// 修改
export const UpdateRole = (sysRole) => {
  return request({
    url: `${API}/update`,
    method: 'put',
    data: sysRole,
  })
}

// 逻辑删除
export const DeleteRole = (id) => {
  return request({
    url: `${API}/delete/${id}`,
    method: 'delete',
  })
}

// 查询所有的角色数据
export const GetAllRoleList = () => {
    return request({
        url: '/admin/system/sysRole/findAll',
        method: 'get'
    })
}

// 给用户分配角色请求
export const DoAssignRoleToUser = (assginRoleVo) => {
    return request({
        url: "/admin/system/sysRoleUser/doAssign",
        method: 'post',
        data: assginRoleVo
    })
}