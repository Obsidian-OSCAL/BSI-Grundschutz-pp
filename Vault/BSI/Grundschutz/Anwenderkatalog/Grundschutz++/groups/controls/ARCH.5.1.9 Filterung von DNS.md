---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.9 Filterung von DNS
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.9 - Filterung von DNS
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md) *** | Externe Netzanschlüsse | SOLLTE | unerwünschte Inhalte in DNS-Verbindungen |  | einschränken | Firewallregeln | >Architektur für Externe Netzanschlüsse SOLLTE unerwünschte Inhalte in DNS-Verbindungen einschränken.

> [!info]- Guidance
>Unerwünschte Inhalte sind DNS-Anfragen oder -Antworten, die für Geschäftsprozesse unnötige oder sogar schädliche Daten enthalten, z.B. Verbindungen zu bekannten Malware-Domains oder zu Werbe- oder Telemetriediensten. Dies kann entweder nach dem Allowlist- oder Denylist-Ansatz erfolgen. Listen bekannter schädlicher Domains können über Threat Intelligence-Feeds oder spezielle DNS-Lösungen wie Pihole bezogen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4938a7c4-fdbb-4ca8-a33c-87d177d25f8b |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4938a7c4-fdbb-4ca8-a33c-87d177d25f8b |
