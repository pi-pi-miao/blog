import fetch from "./fetch";
// 获取用户信息
export const admUserGet = data => {
    return fetch.request({
		url: "/adm/user/get",
		method: "get",
		params: data
	});
};
// 判断当前账号是否已经存在
export const apiUserExist = data => {
    return fetch.request({
		url: "/adm/user/exist",
		method: "get",
		params: data
	});
};
// 添加用户
export const admUserAdd = data => {
    return fetch.request({
		url: "/adm/user/add",
		method: "post",
		data: data
	});
};
// 分页
export const admUserPage = data => {
    return fetch.request({
		url: "/adm/user/page",
		method: "get",
		params: data
	});
};

// 重置用户密码
export const admUserReset = data => {
    return fetch.request({
		url: "/adm/user/reset",
		method: "get",
		params: data
	});
};
// 修改用户
export const admUserEdit = data => {
	return fetch.request({
		url: "/adm/user/edit",
		method: "post",
		data: data
	});
};
// 删除用户
export const admUserDrop = data => {
	return fetch.request({
		url: "/adm/user/drop",
		method: "post",
		data: data
	});
};

// 更新用户状态
export const admUserChgatv = id => {
	return fetch.get("/adm/user/chgatv/${id}");
};