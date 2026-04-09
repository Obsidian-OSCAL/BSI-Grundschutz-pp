---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.11 MTA-STS
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.11 - MTA-STS
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | MTA-STS |  | aktivieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE MTA-STS aktivieren.

> [!info]- Guidance
>Die Mail Transfer Agent Strict Transport Security (MTA-STS) ist ein wichtiger Standard zur Erhöhung der Sicherheit im E-Mail-Verkehr, der die verschlüsselte Zustellung von Nachrichten durch die Erzwingung von Transport Layer Security (TLS) auf der Übertragungsebene gewährleistet. MTA-STS stellt dabei sicher, dass versendende Mail Transfer Agents (MTA) nur verschlüsselte Verbindungen zum Ziel-MTA aufbauen, wodurch Downgrade-Angriffe oder die Umleitung auf unsichere Kanäle wirksam unterbunden werden können. Der Zweck dieser Vorschrift liegt darin, die Vertraulichkeit und Integrität von E-Mail-Inhalten während der Übertragung zu schützen. Ohne MTA-STS könnte ein Angreifer die Kommunikation abfangen und den unverschlüsselten E-Mail-Verkehr mitlesen (Eavesdropping) oder die Nachricht manipulieren, bevor sie den Empfänger erreicht. Die Aktivierung kann das Risiko minimieren, dass E-Mails über unsichere oder unauthentifizierte Verbindungen übertragen werden, selbst wenn die Ziel-Institution TLS unterstützt, was einen robusten Schutz gegen gängige Man-in-the-Middle-Angriffe bietet. Obwohl DNS-Based Authentication of Named Entities (DANE) eine stärkere kryptografische Authentifizierung des TLS-Zertifikats des Ziel-MTA bietet, sollte MTA-STS zusätzlich aktiviert werden, da es eine alternative oder ergänzende Schutzschicht darstellt, falls DANE beim Kommunikationspartner noch nicht implementiert ist oder dessen DNS-Sicherheit (DNSSEC) nicht vertrauenswürdig ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 19e81bd5-20d6-41af-b172-5a3859738a62 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 19e81bd5-20d6-41af-b172-5a3859738a62 |
