---
tags: Network_Access_Control_Rogue_Access_Point_Zero_Trust
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.4.1.2 Quarantäne
parent_control: ARCH.4.1 Netzzugangskontrolle
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.4.1.2 - Quarantäne
Tags: "[Network Access Control](tags_Network Access Control)" "[Rogue Access Point](tags_Rogue Access Point)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [ARCH.4 Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md)
---

** Übergeordnetes Control: ** [ARCH.4.1 Netzzugangskontrolle](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.4.1%20Netzzugangskontrolle.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md) *** | Interne Netzsegmente | KANN | ein Quarantänenetz | für nicht authentifizierte IT-Systeme | installieren | Konfigurationshistorie | >Architektur für Interne Netzsegmente KANN ein Quarantänenetz für nicht authentifizierte IT-Systeme installieren.

> [!info]- Guidance
>Wenn Systeme aufgrund bestimmter Voraussetzungen sich nicht authentifizieren (z.B. installierte Sicherheitsupdates oder weil sie keine 802.1X-Anmeldung unterstützen), kann ein vollständiges blockieren aller Netzverbindungen die Verfügbarkeit erforderlicher Geschäftsprozesse unmöglich machen. Um IT-Systemen einen eingeschränkten Zugang zu Netzressourcen zu ermöglichen – etwa damit diese die Voraussetzungen durch den Download von Updates erfüllen können – kann ein Quarantänenetz eingerichtet werden, das z.B. Zugang zu bestimmten Downloadservern oder eine Meldung des Problems ermöglicht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5f97efff-4db1-4b26-8ab9-4521108e5c0c |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 5f97efff-4db1-4b26-8ab9-4521108e5c0c |
