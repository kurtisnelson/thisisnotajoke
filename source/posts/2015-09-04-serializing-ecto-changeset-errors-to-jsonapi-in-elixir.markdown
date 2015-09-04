---
title: Serializing Ecto Changeset errors to JSONAPI in Phoenix
date: 2015-09-04 11:45 CDT
tags: elixir, phoenix, ecto, jsonapi, ember
---

It took me a good while to figure out ecto's format for changeset errors. It turns out that if you have certain types of validations, each error message returned is in the format `%{"should be at least %{count} characters", [count: 8]}`. Unfortunately, you have to do string replacement to make it human readable.

The view below is enough to render errors properly in Ember but could be improved to provide more of the fields available in the spec.


```elixir
defmodule App.ChangesetView do
  use App.Web, :view

  def render("error.json", %{changeset: changeset}) do
    errors = Enum.map(changeset.errors, fn {field, detail} ->
      %{
        source: %{ pointer: "/data/attributes/#{field}" },
        title: "Invalid Attribute",
        detail: render_detail(detail)
      }
    end)

    %{errors: errors}
  end

  def render_detail({message, values}) do
    Enum.reduce values, message, fn {k, v}, acc ->
      String.replace(acc, "%{#{k}}", to_string(v))
    end
  end

  def render_detail(message) do
    message
  end
end
```

_Thanks to Jose Valim for [pointing out](https://github.com/elixir-lang/ecto/pull/921) to me that a templating language is not needed to solve this problem_
