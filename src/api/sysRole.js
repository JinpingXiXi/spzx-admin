import request from '@/utils/request'

// 角色接口
const API = '/admin/system/sysRole';

// 登录接口
export const FindRoleListByPage = (pageNum, pageSize, queryDto) => {
  return request({
    url: `${API}/findByPage/${pageNum}/${pageSize}`,
    method: 'post',
    data: queryDto,
  })
}