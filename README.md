# a0
> A command line utility to manage `text/number/email/password/address/note` with Alias to easy recall & copy to clipboard.

Let me explain what is `a 0 something`?

The **a** command maps an **alias** to the **text** that persists on disk; Also copy the **text** to **clipboard**. This command takes max two arguments. First arugument for **alias** and second for **text**.

```bash
a 0 something  # Command `a` maps alias `0` with text `something`; Added text to clipboard.

# alias: 0
# text: something
```

Once alias is assignned to the text, **a** just need **alias** to read associated **text** from disk; Also copy same **text** to **clipboard**.

```bash
a 0  # Command `a` returns text  `something` as it was mapped with alias `0` earlier; Added text to clipboard.

# alias: 0
# text: something
```

Store once and use later by refilling clipboard through executing this command. 

## CLI
You can use it directly from the CLI:

```bash
deno run --allow-env --allow-run --allow-read --allow-write https://deno.land/x/a0/cli.ts <alias> <text>

# alias: <alias>
# text: <text>

deno run --allow-env --allow-run --allow-read --allow-write https://deno.land/x/a0/cli.ts <alias>

# alias: <alias>
# text: <text>
```

### You can also install it globally using the following:

```bash
deno install --allow-env --allow-run --allow-read --allow-write -f -n a https://deno.land/x/a0/cli.ts
```

Then, the package is available as command **a** to run:

```bash
a <alias> <text>
a <alias>
```

#### Add alias to the text

```bash
a pass user1Password

# alias: pass
# text: user1Password
```

#### Read text for existing alias

```bash
a pass

# alias: pass
# text: user1Password
```

#### Update text for existing alias

```bash
a pass changedUser1Password

# alias: pass
# text: changedUser1Password
```

## Configuration
Required permissions:
- `allow-env`
- `allow-run`
- `allow-read`
- `allow-write`

## Notes
Tested only for MAC.

## To Do
- [x] Allow one space between words for second arugument 'text'
- [ ] Delete Alias
- [ ] Store encrypted text
- [ ] Testing on Windows & Linux
