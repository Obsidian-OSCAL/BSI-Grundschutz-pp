---
tags: arch42-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.4.2 Autorisiertes Routing
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.4.2 - Autorisiertes Routing
Gruppe: [ARCH.4 Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md) *** | Netze | SOLLTE | Routing-Verbindungen | durch {{eine zuständige Person oder Rolle}} | autorisieren | Konfigurationshistorie | >Architektur für Netze SOLLTE Routing-Verbindungen durch {{ insert: param, arch.4.2-prm1 }} autorisieren.

> [!info]- Guidance
>Dient der Kontrolle von Netzarchitekturen, um unbeabsichtigte oder böswillige Änderungen zu verhindern. Ohne eine solche Freigabe könnte ein Angreifer durch unbemerkte Manipulation von Routing-Einträgen den Datenverkehr umleiten, abhören oder blockieren; auch ein ungeschulter Administrator könnte versehentlich falsche Routen konfigurieren, wodurch kritische Dienste ausfallen könnten. Die Autorisierung kann sicherstellen, dass jede Änderung nachvollziehbar geprüft, dokumentiert und nur nach sachgerechter Bewertung umgesetzt wird, wodurch die Integrität und Verfügbarkeit der Netze erhöht werden kann.  Im konkreten Kontext bedeutet „Routing-Verbindungen“ die Konfiguration von Pfaden, über die Datenpakete zwischen Netzsegmenten oder über Gateways weitergeleitet werden. „Autorisieren“ bedeutet hier die formale Freigabe nach einer sachlichen und fachlichen Prüfung, typischerweise durch Rollen wie (1) Netzwerkarchitekt, (2) IT-Sicherheitsbeauftragter oder (3) Leiter IT-Betrieb. Eine Institution kann dies umsetzen, indem sie (1) eine dokumentierte Freigabeprozedur für alle Routing-Änderungen etabliert, (2) Änderungen technisch über ein Ticket- oder Change-Management-System prüfen und protokollieren lässt, (3) rollenbasierte Zugriffsrechte in Routern und Firewalls so einschränken kann, dass nur autorisierte Personen Konfigurationsänderungen durchführen, und (4) automatisierte Plausibilitätsprüfungen oder Peer-Reviews nutzen kann, um fehlerhafte oder unsichere Routen frühzeitig zu erkennen.  Die Autorisierung kann entweder einzelne Routen (z.B. für Netz A zwischen Router B und C), als auch bestimmte Routing-Regeln (z.B. Default-Routing über die zentrale Firewall) autorisieren. Sinnvoll ist es dabei das Prinzip "so allgemein wie für den Betrieb nötig, so spezifisch wie für die Sicherheit möglich" als Faustregel anzuwenden. Bei der Verwendung dynamischer Routing-Algorithmen kann die Anforderung umgesetzt werden, indem eingeschränkte Bereiche freigegeben werden, z.B. "dynamisches Routing im Bereich 10.x.x.x)".

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 77aebab8-462b-4849-aaa2-9c939af5e1dc |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 77aebab8-462b-4849-aaa2-9c939af5e1dc |
