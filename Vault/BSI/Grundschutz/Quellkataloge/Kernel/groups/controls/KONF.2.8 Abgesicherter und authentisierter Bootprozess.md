---
tags: Cryptography_Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.8 Abgesicherter und authentisierter Bootprozess
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.8 - Abgesicherter und authentisierter Bootprozess
Tags: "[Cryptography](tags_Cryptography)" "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | KANN | einen abgesicherten und authentisierten Bootprozess |  | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN einen abgesicherten und authentisierten Bootprozess aktivieren.

> [!info]- Guidance
>Dies empfiehlt sich für eingebettete Systeme (Embedded Systems), indem z.B. der Bootloader die Integrität des Betriebssystems überprüft und es nur dann lädt, wenn es als korrekt eingestuft wurde. Ebenso empfiehlt es sich ein mehrstufiges Boot-Konzept mit kryptographisch sicherer Überprüfung der Einzelschritte zu realisieren, sichere Hardware-Vertrauensanker zu verwenden, bei ARM & UEFI-basierten Systemem jeweils (ARM) Secure Boot zu nutzen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8d460d82-f7db-42c5-b213-625df4381ff3 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 8d460d82-f7db-42c5-b213-625df4381ff3 |
