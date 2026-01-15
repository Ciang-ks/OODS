# OODS 部署说明

## 自动部署配置

已为本项目配置 GitHub Actions 自动部署到 `Ciang-ks.github.io/OODS/`。

### 配置步骤

1. **创建 Personal Access Token (PAT)**
   - 访问 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - 点击 "Generate new token (classic)"
   - 勾选权限：`repo`（完整仓库权限）
   - 生成并复制 token

2. **在 OODS 仓库添加 Secret**
   - 打开 https://github.com/Ciang-ks/OODS/settings/secrets/actions
   - 点击 "New repository secret"
   - Name: `PAGES_DEPLOY_TOKEN`
   - Value: 粘贴刚才复制的 token
   - 保存

3. **推送代码触发部署**
   ```bash
   cd /home/jxq/project/OODS
   git add .github/workflows/deploy.yml site/astro.config.mjs
   git commit -m "Add GitHub Actions auto-deployment"
   git push origin main
   ```

### 工作流程

- 每次推送到 `main` 分支时，GitHub Actions 会自动：
  1. 构建 `site/` 目录下的 Astro 项目
  2. 将构建产物（`dist/`）推送到 `Ciang-ks.github.io` 仓库的 `OODS/` 目录
  3. 自动触发 GitHub Pages 部署

- 访问地址：https://ciang-ks.github.io/OODS/

### 手动触发部署

如需手动触发部署（不推送代码）：
1. 访问 https://github.com/Ciang-ks/OODS/actions
2. 选择 "Deploy to GitHub Pages" workflow
3. 点击 "Run workflow"

### 本地测试

```bash
cd /home/jxq/project/OODS/site
npm run dev    # 开发服务器
npm run build  # 本地构建测试
```

### 注意事项

- `astro.config.mjs` 中的 `base: '/OODS'` 确保资源路径正确
- `site` 字段已更新为 `https://ciang-ks.github.io`
- workflow 会自动清理旧的 `OODS/` 目录并替换为新构建
