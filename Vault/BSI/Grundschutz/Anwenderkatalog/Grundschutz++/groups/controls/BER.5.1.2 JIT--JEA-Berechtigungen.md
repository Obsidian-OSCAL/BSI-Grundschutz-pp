---
tags:
- Zero_Trust
- ber512-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.5.1.2 JIT‑/JEA‑Berechtigungen
parent_control: BER.5.1 Prinzip der geringsten Berechtigungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.5.1.2 - JIT‑/JEA‑Berechtigungen
Tags: "[Zero Trust](tags_Zero Trust)"
Gruppe: [BER.5 Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md)
---

** Übergeordnetes Control: ** [BER.5.1 Prinzip der geringsten Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.5.1%20Prinzip%20der%20geringsten%20Berechtigungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md) *** |  | KANN | die Berechtigung zum Zeitpunkt des Zugriffs | für {{besonders kritische Ressourcen oder Zugänge}} | aktivieren | Inventar Berechtigungen | >Berechtigung KANN die Berechtigung zum Zeitpunkt des Zugriffs für {{ insert: param, ber.5.1.2-prm1 }} aktivieren.

> [!info]- Guidance
>„JIT‑/JEA‑Berechtigungen“ (Just‑In‑Time/Just‑Enough‑Access) ist die zeitlich und inhaltlich begrenzte Vergabe von Rechten zum Zeitpunkt eines Zugriffs auf eine Ressource. Dies kann insbesondere für privilegierte Zugangskonten und Administrationszugänge sinnvoll sein, um erhöhte Rechte nur genau dann zu ermöglichen, wenn sie wirklich erforderlich sind.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e549f464-b2fb-42a1-83b9-21bd3bb0f3cf |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e549f464-b2fb-42a1-83b9-21bd3bb0f3cf |
