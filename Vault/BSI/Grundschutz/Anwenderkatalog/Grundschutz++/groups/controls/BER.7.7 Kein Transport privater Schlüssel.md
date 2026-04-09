---
tags:
- Cryptography
- ber77-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.7 Kein Transport privater Schlüssel
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.7 - Kein Transport privater Schlüssel
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md) *** |  | KANN | den Export privater Schlüssel | durch {{eine zuständige Person oder Rolle}} | autorisieren | IT-Betriebskonzept | >Berechtigung KANN den Export privater Schlüssel durch {{ insert: param, ber.7.7-prm1 }} autorisieren.

> [!info]- Guidance
>Im Allgemeinen ist es sinnvoll, private Schlüssel nur dort zu erzeugen, wo sie auch genutzt werden. Andernfalls könnten sie durch den Export kompromittiert werden. Hiervon sind allerdings zahlreiche Ausnahmen denkbar, z.B. zur Schlüsselerzeugung auf besonders abgesicherten Systemen, zum Transport auf Redundanzsysteme oder zur Datensicherung. Daher ist eine Abwägung sinnvoll, ob der Export zu genehmigen ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c28426cd-d01c-427d-bade-141936177c55 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | c28426cd-d01c-427d-bade-141936177c55 |
