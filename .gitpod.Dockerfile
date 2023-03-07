FROM gitpod/workspace-full:2023-03-06-18-43-51
# Install custom tools, runtime, etc.
RUN sudo curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh -s -- -y -v 

# switch to user gitpod
USER gitpod 

# NOTE: this installs in `/home/gitpod` but the workspace terminal is in /workspace/edgedb-node-ts-playground-template. 
# note: the workspace name might change if users for repo
# test `--project-dir=project-dir` flag ; test restarting workspace
RUN edgedb project  init --server-instance=edgedb --non-interactive --project-dir=/workspace/edgedb-node-ts-playground-template
