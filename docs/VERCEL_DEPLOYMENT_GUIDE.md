# Vercel 部署配置指南

## 🚨 当前问题

您的 Vercel 部署缺少 Mapbox Token 环境变量，导致：
- ❌ 使用 OSM 背景地图（功能受限）
- ❌ 403 错误
- ❌ 地图功能与本地不一致

## ✅ 解决方案：配置环境变量

### 步骤 1：获取您的 Mapbox Token

1. 登录 https://account.mapbox.com/
2. 前往 **Access Tokens** 页面
3. 找到您的 public token（以 `pk.` 开头）
4. 复制 token

### 步骤 2：在 Vercel 配置环境变量

1. 访问 **https://vercel.com/dashboard**
2. 点击您的 `bordeaux-map` 项目
3. 进入 **Settings** → **Environment Variables**
4. 添加以下环境变量：

   ```
   Name:  VITE_MAPBOX_TOKEN
   Value: pk.eyJ1IjoieW91ci10b2tlbiIsImEiOiJ5b3VyLWlkIn0...（您的完整token）
   ```

5. 选择应用环境：
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

6. 点击 **Save**

### 步骤 3：重新部署

保存环境变量后，有两种方式触发重新部署：

#### 方法 A：自动触发（推荐）
只需推送任何代码更改到 GitHub：
```bash
git commit --allow-empty -m "触发重新部署"
git push origin master
```

#### 方法 B：手动触发
1. 在 Vercel 项目页面
2. 找到最新的 deployment
3. 点击右侧的 **⋯** 菜单
4. 选择 **Redeploy**
5. 确认重新部署

### 步骤 4：验证部署

部署完成后（约 2-5 分钟），访问：
- https://bordeaux-map.vercel.app/

检查控制台：
- ✅ 应该看到 `[Mapbox] 使用 Mapbox 樣式 (satellite-v9)`
- ❌ 不应该看到 `未偵測到 VITE_MAPBOX_TOKEN`

---

## 📋 Mapbox Token 配置要点

### Token 权限要求
确保您的 Mapbox Token 具有以下权限：
- ✅ Terrain（地形数据）
- ✅ Styles（卫星地图样式）

### URL 白名单设置
在 Mapbox 账户中，将以下 URL 添加到 Token 的 **Allowed URLs**：
```
https://bordeaux-map.vercel.app/*
https://*.vercel.app/*
http://localhost:5173/*
http://localhost:5174/*
```

---

## 🔍 故障排查

### 问题 1：仍然显示 OSM 背景
**原因**：环境变量未生效
**解决**：
1. 确认环境变量名称拼写正确：`VITE_MAPBOX_TOKEN`
2. 确认 token 以 `pk.` 开头
3. 重新部署项目

### 问题 2：403 Forbidden 错误
**原因**：Mapbox Token URL 限制
**解决**：
1. 登录 Mapbox 账户
2. 编辑您的 token
3. 添加 `https://*.vercel.app/*` 到 Allowed URLs
4. 保存并等待几分钟生效

### 问题 3：地图无法加载
**原因**：Token 过期或无效
**解决**：
1. 创建新的 Mapbox Token
2. 在 Vercel 更新环境变量
3. 重新部署

---

## 📞 需要帮助？

如果按照以上步骤操作后仍有问题，请提供：
1. Vercel 部署日志（Deployment logs）
2. 浏览器控制台错误信息
3. Mapbox Token 权限截图

---

## ✨ 成功标志

配置成功后，您应该看到：
- ✅ 卫星地图背景（Mapbox satellite-v9）
- ✅ 3D 地形功能可用
- ✅ 等高线功能可用
- ✅ 产区 GeoJSON 正常显示
- ✅ 控制台无 403 错误
