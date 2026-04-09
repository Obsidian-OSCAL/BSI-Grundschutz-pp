---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.14.3 Iterative Beantwortung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.14.3 - Iterative Beantwortung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.14 Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md) *** | DNS-Server | SOLLTE | die iterative Beantwortung von DNS-Anfragen | aus dem Internet | aktivieren | Konfigurationshistorie | >Konfiguration für DNS-Server SOLLTE die iterative Beantwortung von DNS-Anfragen aus dem Internet aktivieren.

> [!info]- Guidance
>Bei iterativen Anfragen kommt die Antwort direkt vom autoritativen Server, statt auf zwischengespeicherte Antworten anderer DNS-Resolver zu vertrauen. Dies reduziert die Angriffsfläche für Cache Poisoning und erschwert DNS-Tunneling zur Datenexfiltration oder Command-and-Control-Kommunikation.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 57cb3f3e-bb54-444c-a337-8f098ae085a2 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 57cb3f3e-bb54-444c-a337-8f098ae085a2 |
