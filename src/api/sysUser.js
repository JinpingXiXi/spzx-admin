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

//保存新用戶*
export const SaveSysUser = (data)=>{
    return request({
        url: "/admin/system/sysUser/saveSysUser",
        method: "post",
        data
    })
}

// 修改用户数据的方法
export const UpdateSysUser = (sysUser)=>{
    return request({
        url:"/admin/system/sysUser/updateSysUser",
        method: "put",
        data: sysUser
    })
}


//刪除用戶（not really）
export const deleteSysUserById = (userId)=>{
    return request({
        url: "/admin/system/sysUser/deleteSysUserById/" + userId,
        method: 'delete'
    })
}