FROM gitpod/workspace-full:2023-03-06-18-43-51
# Install custom tools, runtime, etc.
RUN sudo curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh -s -- -y -v 
          
RUN pwd
# Apply user-specific settings using `USER gitpod` or by cd to `/home/gitpod`
USER gitpod 
RUN pwd
RUN gitpod edgedb project  init --server-instance=edgedb --non-interactive