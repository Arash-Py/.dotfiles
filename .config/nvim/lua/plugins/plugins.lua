return {
  { "sbdchd/neoformat" },
  {
    "williamboman/mason.nvim",
    opts = function(_, opts)
      table.insert(opts.ensure_installed, "prettier")
    end,
  },
}
