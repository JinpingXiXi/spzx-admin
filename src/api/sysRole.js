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