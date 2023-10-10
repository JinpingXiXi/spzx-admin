import request from '@/utils/request'

// 用户接口
const API = '/admin/system/sysUser';

// 分页查询
export const FindUserListByPage = (pageNum, pageSize, queryDto) => {
  return request({
    url: `${API}/findByPage/${pageNum}/${pageSize}`,
    method: 'post',
    data: queryDto,
  })
}