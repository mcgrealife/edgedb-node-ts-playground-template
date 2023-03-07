FROM gitpod/workspace-full:2023-03-06-18-43-51
# Install custom tools, runtime, etc.
# install-packages is a wrapper for `apt` that helps skip a few commands in the docker env.
RUN sudo curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh -s -- -y -v \
    && edgedb project  init --server-instance=edgedb --non-interactive
          
# Apply user-specific settings
